import {Image, IconsImage} from 'react-native';
import {scaled} from '../../utils';
import {SVGIconsMapper} from '../../../Assets';
export const Icon = props => {
  const {icon} = props;
  return (
    <Image
      source={icon}
      //  style={{...scaled(13)}}
      resizeMode="contain"
      {...props}
    />
  );
};

export const SvgIcon = props => {
  const {icon, pathFill = '#FFF'} = props;
  const IconsImage = SVGIconsMapper[icon];

  return (
    <IconsImage
      pathFill={pathFill}
      // {...scaled(12)}
      {...props}
    />
  );
};
