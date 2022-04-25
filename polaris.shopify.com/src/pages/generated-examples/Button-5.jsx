import { AppProvider, Button } from "@shopify/polaris";

import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <div>
  Could not retrieve data.{' '}
  <Button plain monochrome>
    Try again
  </Button>
</div>
      </div>
    </AppProvider>
  );
}

export default Example;