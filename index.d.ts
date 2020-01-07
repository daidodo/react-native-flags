import { Component } from 'react';

export default class Flag extends Component<{
  size: 16 | 24 | 32 | 48 | 64;
  code: string;
  type?: 'flat' | 'shiny';
  style?: any;
}> {}
