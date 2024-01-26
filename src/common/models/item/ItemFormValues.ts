export interface ItemFormValues {
  serialCode: string;
  comment?: string;
  type: {
    label: string;
    value: string;
  };
  qualityState: {
    label: string;
    value: string;
  };
  ownerId: {
    label: string;
    value: string;
    id: string;
  };
  state?: string;
}
