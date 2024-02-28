import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import css from "./Layout.module.css";
import { Toaster } from "react-hot-toast";
export const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense
        fallback={
          <div className={css.colorRingWrapperBox}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#de0c1c", "#fe2d2d", "#fb7830", "	#fecf02", "#ffdd47"]}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-right"></Toaster>
    </>
  );
};
