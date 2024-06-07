import { useEffect } from "react";

/**
 * Disables scroll on the page when `scrollDisabled` is `true`
 * Enables scroll on the page when `scrollDisabled` is `false` and on unmount
 */
const useDisableBodyScrolling = (scrollDisabled: boolean) => {
  useEffect(() => {
    if (scrollDisabled) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.marginRight = "16px";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.marginRight = "0";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.marginRight = "0";
    };
  }, [scrollDisabled]);
};

export default useDisableBodyScrolling;
