import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BreedList from './BreedList';

describe(BreedList, () => {
  const component = shallow(<BreedList />);

  it("renders and matches our snapshot", () => {
    const component = renderer.create(<BreedList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
