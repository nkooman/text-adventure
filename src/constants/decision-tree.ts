import { Options } from '@/components/Selection';

export type DecisionTree = {
  key: string;
  type: 'input' | 'selection' | 'enter' | 'exit';
  prompt: string[];
  paths?: DecisionTree[];
  options?: Options;
};

export const DECISION_TREE: DecisionTree = {
  key: 'default',
  type: 'input',
  prompt: ['What is your name?'],
  paths: [
    {
      key: 'default',
      type: 'selection',
      prompt: [
        'You enter BizStream. Ruby is walking at you at an oddly fast pace.',
        'What do you do?',
      ],
      options: {
        runAway: 'Run away',
        attack: 'Attack',
        talk: 'Talk to Ruby',
      },
      paths: [
        {
          key: 'runAway',
          type: 'enter',
          prompt: ['You run away from Ruby.', 'You are now alone in BizStream.'],
          paths: [
            {
              key: 'default',
              type: 'exit',
              prompt: ['Fin.'],
            },
          ],
        },
        {
          key: 'attack',
          type: 'enter',
          prompt: ['You attack Ruby.'],
          paths: [
            {
              key: 'default',
              type: 'selection',
              prompt: ['Ruby is wounded.', 'What do you do?'],
              options: {
                runAway: 'Run away',
                attack: 'Attack',
              },
              paths: [
                {
                  key: 'runAway',
                  type: 'enter',
                  prompt: ['You run away from Ruby.', 'He is left to suffer.'],
                  paths: [
                    {
                      key: 'default',
                      type: 'exit',
                      prompt: ['Fin.'],
                    },
                  ],
                },
                {
                  key: 'attack',
                  type: 'enter',
                  prompt: ['You attack Ruby.'],
                  paths: [
                    {
                      key: 'default',
                      type: 'selection',
                      prompt: ['Ruby is defeated.', 'What do you do?.'],
                      options: {
                        loot: 'Loot',
                        runAway: 'Run away',
                      },
                      paths: [
                        {
                          key: 'loot',
                          type: 'enter',
                          prompt: ['You loot Ruby.', 'You find a half empty bottle of Kraken.'],
                          paths: [
                            {
                              key: 'default',
                              type: 'exit',
                              prompt: ['Fin.'],
                            },
                          ],
                        },
                        {
                          key: 'runAway',
                          type: 'enter',
                          prompt: ['You run away from the crime scene never to be seen again'],
                          paths: [
                            {
                              key: 'default',
                              type: 'exit',
                              prompt: ['Fin.'],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: 'talk',
          type: 'enter',
          prompt: ['You talk to Ruby.', 'Ruby is not impressed.'],
          paths: [
            {
              key: 'default',
              type: 'selection',
              prompt: ['What do you do?'],
              options: {
                talk: 'Talk to Ruby',
                call: 'Call Mark over to German Suplex Ruby',
              },
              paths: [
                {
                  key: 'talk',
                  type: 'enter',
                  prompt: ['You try talking to Ruby again.', 'Ruby flees.'],
                  paths: [
                    {
                      key: 'default',
                      type: 'exit',
                      prompt: ['Fin.'],
                    },
                  ],
                },
                {
                  key: 'call',
                  type: 'enter',
                  prompt: [
                    'You call for Mark.',
                    'Mark sprints from the developer area and suplexes Ruby.',
                  ],
                  paths: [
                    {
                      key: 'default',
                      type: 'enter',
                      prompt: ['Ruby is defeated.', 'What do you do?'],
                      options: {
                        runAway: 'Run away',
                        attack: 'Attack',
                      },
                      paths: [
                        {
                          key: 'runAway',
                          type: 'enter',
                          prompt: ['You run away from Ruby.', 'He is left to suffer.'],
                          paths: [
                            {
                              key: 'default',
                              type: 'exit',
                              prompt: ['Fin.'],
                            },
                          ],
                        },
                        {
                          key: 'attack',
                          type: 'enter',
                          prompt: ['You attack Ruby.'],
                          paths: [
                            {
                              key: 'default',
                              type: 'selection',
                              prompt: ['Ruby is defeated.', 'What do you do?.'],
                              options: {
                                loot: 'Loot',
                                runAway: 'Run away',
                              },
                              paths: [
                                {
                                  key: 'loot',
                                  type: 'enter',
                                  prompt: [
                                    'You loot Ruby.',
                                    'You find a half empty bottle of Kraken.',
                                  ],
                                  paths: [
                                    {
                                      key: 'default',
                                      type: 'exit',
                                      prompt: ['Fin.'],
                                    },
                                  ],
                                },
                                {
                                  key: 'runAway',
                                  type: 'enter',
                                  prompt: [
                                    'You run away from the crime scene never to be seen again',
                                  ],
                                  paths: [
                                    {
                                      key: 'default',
                                      type: 'exit',
                                      prompt: ['Fin.'],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
