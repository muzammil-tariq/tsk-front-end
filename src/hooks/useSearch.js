import * as React from "react";
export default function useSearch() {
  const [searchTypingTimeout, setSearchTypingTimeout] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const onSearchChange = (e) => {
    const value = e.target.value;
    if (searchTypingTimeout) {
      clearTimeout(searchTypingTimeout);
    }
    setSearchTypingTimeout(
      setTimeout(function () {
        setSearch(value);
      }, 1000)
    );
  };
  return {
    search,
    onSearchChange,
  };
}
