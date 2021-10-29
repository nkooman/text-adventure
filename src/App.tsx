import { Dispatch, FC, KeyboardEvent, SetStateAction, useEffect, useState } from 'react';
import { useLatest } from 'react-use';
import { Terminal } from '@/components/Terminal';
import { Line } from '@/components/Line';
import { Input } from '@/components/Input';
import { Selection } from '@/components/Selection';
import { DecisionTree, DECISION_TREE } from '@/constants/decision-tree';
import 'twin.macro';

const useDecisionTree = (
  tree: DecisionTree,
  playerInputState: [string, Dispatch<SetStateAction<string>>],
  playerSelectionState: [string, Dispatch<SetStateAction<string>>],
  playerNameState: [string, Dispatch<SetStateAction<string>>]
) => {
  const [currentNode, setCurrentNode] = useState(tree);
  const [playerInput, setPlayerInput] = playerInputState;
  const [playerSelection, setPlayerSelection] = playerSelectionState;
  const [playerName, setPlayerName] = playerNameState;

  const latestCurrentNode = useLatest(currentNode);
  const latestPlayerName = useLatest(playerName);

  const currentPlayerChoiceType = latestCurrentNode.current.type;
  const context = () =>
    `Game@BizStream${latestPlayerName.current ? `_${latestPlayerName.current}` : ''}`;

  const render = (
    node?: DecisionTree
  ): [JSX.Element | JSX.Element[] | null, JSX.Element | null] => {
    const latestNode = node ?? latestCurrentNode.current;
    if (latestNode.type === 'input') {
      return [
        <Line context={context()} text={latestNode.prompt[0]} />,
        <Input context={context()} setState={setPlayerInput} />,
      ];
    }

    if (latestNode.type === 'selection' && latestNode.options) {
      return [
        latestNode.prompt.map((item) => <Line key={item} context={context()} text={item} />),
        <Selection
          context={context()}
          options={latestNode.options}
          value={playerSelection}
          onChange={setPlayerSelection}
        />,
      ];
    }

    if (latestNode.type === 'enter') {
      return [
        latestNode.prompt.map((item) => <Line key={item} context={context()} text={item} />),
        <>
          <Line context={context()} text="Press enter to continue..." />
          <Input context={context()} setState={setPlayerInput} />
        </>,
      ];
    }

    return [
      latestNode.prompt.map((item) => <Line key={item} context={context()} text={item} />),
      <Line context={context()} text="You're done here." />,
    ];
  };

  const incrementGameState = (): DecisionTree | undefined => {
    if (latestCurrentNode.current.type === 'input') {
      if (!latestCurrentNode.current.paths) return undefined;
      if (!playerInput) return undefined;
      // For now this is just the name so we shall explicitly set it here.
      setPlayerName(playerInput);
      setPlayerInput('');
      setCurrentNode(latestCurrentNode.current.paths[0]);
      return latestCurrentNode.current.paths[0];
    }

    if (latestCurrentNode.current.type === 'selection') {
      const nextNode = latestCurrentNode.current.paths?.find(
        (path) => path.key === playerSelection
      );
      if (!nextNode) return undefined;
      setCurrentNode(nextNode);
      return nextNode;
    }

    if (latestCurrentNode.current.type === 'enter') {
      if (!latestCurrentNode.current.paths) return undefined;
      setCurrentNode(latestCurrentNode.current.paths[0]);
      return latestCurrentNode.current.paths[0];
    }

    if (latestCurrentNode.current.type === 'exit') {
      // eslint-disable-next-line no-alert
      window.alert(latestCurrentNode.current.prompt[0]);
    }

    return undefined;
  };

  return {
    currentNode,
    currentPlayerChoiceType,
    render,
    incrementGameState,
  };
};

export const App: FC = () => {
  const playerInputState = useState('');
  const playerSelectionState = useState<string>('');
  const playerNameState = useState('');
  const { incrementGameState, render } = useDecisionTree(
    DECISION_TREE,
    playerInputState,
    playerSelectionState,
    playerNameState
  );
  const [history, setHistory] = useState<JSX.Element[]>([]);
  const [action, setAction] = useState<JSX.Element | null>();
  const latestHistory = useLatest(history);
  const latestAction = useLatest(action);

  const addNewLines = (node?: DecisionTree) => {
    const [newLines, newAction] = render(node);

    setHistory((prev) => {
      if (!newLines) return prev;
      if (Array.isArray(newLines)) {
        return [...prev, ...newLines];
      }

      return [...prev, newLines];
    });

    setAction(newAction);
  };

  useEffect(() => {
    addNewLines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAction = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;

    const newNode = incrementGameState();
    addNewLines(newNode);
    playerSelectionState[1]('');
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div tw="grid place-items-center height[100%] width[100%]" onKeyDown={handleAction}>
      <Terminal>
        {latestHistory.current.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} tw="contents">
            {item}
          </div>
        ))}
        {latestAction.current}
      </Terminal>
    </div>
  );
};
