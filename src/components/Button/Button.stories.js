import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './index';

export default {
  title: 'Button Component',
  component: Button,
  decorators: [withKnobs],
};

export const ButtonComponent = () => {
  let onActive = false;

  return (
    <Button 
      title={text('타이틀', '안녕하세요')} 
      active={boolean('버튼 확성', false)}
      onActiveHandler={action('클릭', !onActive)}
    />
  )
};

ButtonComponent.story = {
  name: 'Button',
};