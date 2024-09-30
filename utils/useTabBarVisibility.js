import { useSegments } from "expo-router";

const useTabBarVisibility = () => {
  const segments = useSegments();

  const shouldHideTabBar = () => {
    // get the current page from the segment
    const page = segments[segments.length - 1];
    // list of pages tab bar should be hidden
    const pagesToHideTabBar = [
      "[id]",
      "chatUserProfile",
      "[searchQuery]",
      "[townId]",
      "[journalId]",
    ];

    return pagesToHideTabBar.includes(page);
  };

  return shouldHideTabBar;
};

export default useTabBarVisibility;
