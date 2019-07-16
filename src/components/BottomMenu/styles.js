import styled from 'styled-components/native';

const squareSize = 80;

export const Container = styled.View`
  height: ${squareSize}px;
`;

export const BottomMenu = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
})``;

export const BottomMenuButton = styled.TouchableOpacity`
  height: ${squareSize}px;
  width: ${squareSize}px;
  padding: 10px;
  border-radius: 3px;
  background: #59abb2;
  margin-left: 10px;
  justify-content: space-between;
`;

export const BottomMenuText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
