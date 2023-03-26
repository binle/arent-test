import { message } from 'antd';
import { useEffect, useState } from 'react';
import { ColumnDataDto } from '../../../definitions';
import { asyncGetColumnData, processLoading } from '../../../processes';
import { ScrollTopComponent } from '../../common-components';
import { ColumnListComponent } from './components/column-list.component';
import { RecommendComponent } from './components/recommend.component';

const ColumnPage = () => {
  const getColumnData = async (offset?: number) => {
    return (await asyncGetColumnData(offset)).list;
  };

  const [columnData, setColumnData] = useState<ColumnDataDto[]>([]);

  useEffect(() => {
    processLoading(getColumnData())
      .then((_columnData) => {
        setColumnData(_columnData);
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  }, []);

  const onGetMoreColumnData = async () => {
    processLoading(getColumnData(columnData.length))
      .then((_columnData) => {
        if (_columnData.length === 0) {
          message.open({ type: 'info', content: 'すべてのデータが表示されます！' });
        }
        setColumnData(columnData.concat(_columnData));
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  };

  return (
    <div className="column-page">
      <RecommendComponent />
      <ColumnListComponent columnData={columnData} onGetMoreColumnData={onGetMoreColumnData} />
      <ScrollTopComponent />
    </div>
  );
};

export default ColumnPage;
