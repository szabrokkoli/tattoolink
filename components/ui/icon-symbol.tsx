// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = {
  [key in IconSymbolName]: ComponentProps<typeof MaterialIcons>['name'];
};
type IconSymbolName =
  'house.fill'
  | 'paperplane.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'chevron.right'
  | 'person.crop.circle'
  | 'calendar.badge.plus'
  | 'bubble.left.and.bubble.right.fill'
  | 'xmark'
  | 'trash'
  | 'check'
  | 'slider.horizontal.3'
  | 'magnifyingglass';

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.crop.circle': 'person',
  'calendar.badge.plus': 'event',
  'bubble.left.and.bubble.right.fill': 'chat',
  'xmark': 'close',
  'trash': 'delete',
  'check': 'check', // pip ikon
  'slider.horizontal.3': 'tune', // filter ikon
  'magnifyingglass': 'search', // keresés ikon
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
