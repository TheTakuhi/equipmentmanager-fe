import { FC } from "react";

import { OrgChart } from "../../../manager/components/OrgChart";
import { useActionDialog } from "../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../FormDialog";

type OrgChartDialogProps = {
  userId: string;
};

export const OrgChartDialog: FC<OrgChartDialogProps> = ({ userId }) => {
  const { close } = useActionDialog();

  return (
    <FormDialog
      title="Organization chart"
      dialogForm={<OrgChart userId={userId} />}
      close={close}
    />
  );
};
