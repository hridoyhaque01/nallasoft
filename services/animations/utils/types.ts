type AnimationSectionConfig = {
  titleSelector?: string;
  lineSelector?: string;
  tagSelector?: string;
  descriptionSelector?: string;
  startPositionSelector?: string;
  triggerStart?: string;
  triggerEnd?: string;
};

interface ISlideX {
  x?: number;
  duration?: number;
  opacity?: number;
  stagger?: number;
}

interface ISlideY {
  y?: number;
  duration?: number;
  opacity?: number;
  stagger?: number;
}

interface IThumbnail {
  triggerSelector?: string;
}

export type { AnimationSectionConfig, ISlideX, ISlideY, IThumbnail };
