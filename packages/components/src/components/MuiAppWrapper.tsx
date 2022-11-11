import { StyledEngineProvider } from "@mui/material";
import { PropsWithChildren } from "react";

/**
 *
 * Component to inject these mui styles before so that tailwind can overwrite
 *
 */

export default function MuiAppWrapper(props: PropsWithChildren) {
 // Display the name passed as props
 return (
  <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>
 );
}
