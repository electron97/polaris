// import { Tag, Stack } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// 
// function RemovableTagWithLinkExample() {
//   const [selectedTags, setSelectedTags] = useState([
//     "Rustic",
//     "Antique",
//     "Vinyl",
//     "Refurbished",
//   ]);
// 
//   const removeTag = useCallback(
//     (tag) => () => {
//       setSelectedTags((previousTags) =>
//         previousTags.filter((previousTag) => previousTag !== tag)
//       );
//     },
//     []
//   );
// 
//   const tagMarkup = selectedTags.map((option) => (
//     <Tag key={option} onRemove={removeTag(option)} url="/collections/wholesale">
//       {option}
//     </Tag>
//   ));
// 
//   return <Stack spacing="tight">{tagMarkup}</Stack>;
// }
// 
import { withPolarisExample } from "../../components/PolarisExamplePage";
export default withPolarisExample(() => <p>Polaris Example Tk</p>);