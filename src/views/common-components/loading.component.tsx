import { Component } from 'react';
import { APP_EVENTS } from '../../constants';
import { LoadingEmitData } from '../../definitions';
import { appEventEmitter } from '../../processes';
import { OverlayComponent } from './overlay.component';

import { Spin } from 'antd';

export class LoadingComponent extends Component<any, LoadingEmitData> {
  offListener: (() => void) | undefined;

  componentDidMount() {
    this.offListener = appEventEmitter.on(APP_EVENTS.app_loading, (data: LoadingEmitData) => {
      this.setState({
        display: data.display,
        message: data.message,
      });
    });
  }

  componentWillUnmount() {
    this.offListener && this.offListener();
  }

  render() {
    return (
      <OverlayComponent display={this.state?.display}>
        <div className="loading">
          <Spin tip={this.state?.message || this.props.message || '....'} size="large" />
        </div>
      </OverlayComponent>
    );
  }
}
