type IIcon = StyledComponent<"div", any> & {
  active?: boolean;
};

interface IPathProps {
  active?: boolean;
}

interface ISvgIconProps extends IIcon {
  width: number;
  height: number;
}
