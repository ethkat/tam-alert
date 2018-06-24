import _ from 'lodash';
import Faker from 'faker';

const createId = name => _.uniqueId(`${name}-`);

export default {
  post: (props = {}) => ({
    _id: createId('post'),
    type: null,
    title: Faker.lorem.sentence(),
    image: Faker.image.image(),
    createdAt: Faker.date.recent(),
    trustCount: Faker.random.number(100),
    description: Faker.lorem.paragraphs(),
    ...props,
  }),
};
