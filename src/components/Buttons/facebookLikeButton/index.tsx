import { useEffect } from "react";

const FacebookLikeButton: React.FC = () => {
  useEffect(() => {
    // Load Facebook SDK for JavaScript
    (function (d: Document, s: string, id: string) {
      let js: HTMLScriptElement | null,
        fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div className="facebook-like-button-container">
      <div id="fb-root"></div>
      <div
        className="fb-like"
        data-href="https://www.facebook.com/ISSAS.GULV"
        data-width=""
        data-layout="standard"
        data-action="like"
        data-size="large"
        data-share="false"
      ></div>
    </div>
  );
};

export default FacebookLikeButton;
