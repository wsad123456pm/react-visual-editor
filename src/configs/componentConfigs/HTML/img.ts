import { ComponentConfigType } from '@/types/ComponentConfigType';
import { PROPS_TYPES } from '@/types/ConfigTypes';

const img:ComponentConfigType={
  propsConfig: {
    alt: {
      label: '图像的替代文本',
      type: PROPS_TYPES.string,
    },
    src: {
      label: '上传图像',
      type: PROPS_TYPES.string,
    },
    height: {
      label: '规定图像的高度',
      type: PROPS_TYPES.string,
    },
    width: {
      label: '规定图像的宽度',
      type: PROPS_TYPES.string,
    },
  },
};
export default img
