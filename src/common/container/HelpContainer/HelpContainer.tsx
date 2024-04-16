import { FC, useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import Button from "../../components/Button";
import About from "../../components/HelpContent/About";
import Items from "../../components/HelpContent/Items";
import Loans from "../../components/HelpContent/Loans";
import MyPeople from "../../components/HelpContent/MyPeople";
import Teams from "../../components/HelpContent/Teams";

const helpContent = [About, MyPeople, Items, Loans, Teams];

const ComponentRenderer: FC<{ component: FC }> = ({ component: Component }) => {
  return <Component />;
};

const HelpContainer: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="2rem">
      <GridItem
        colSpan={1}
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        {helpContent.map((Component, index) => (
          <Button
            key={index}
            variant="primary"
            label={Component.name}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </GridItem>
      <GridItem colSpan={4}>
        {activeStep !== null && (
          <ComponentRenderer component={helpContent[activeStep]} />
        )}
      </GridItem>
    </Grid>
  );
};

export default HelpContainer;
