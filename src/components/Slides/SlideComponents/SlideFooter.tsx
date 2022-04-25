import { x } from "@xstyled/styled-components";

type SlideFooterProps = {
  entries: string[];
};

const SlideFooter = ({ entries }: SlideFooterProps): JSX.Element =>
  (
    <x.div
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      zIndex={5}
    >
      {entries.map(
        (entry, index) =>
        <p key={index}>{entry}</p>
      )}
    </x.div>
  );

export default SlideFooter;
