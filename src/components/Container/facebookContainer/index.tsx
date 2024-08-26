import { useEffect } from "react";

const FacebookPage: React.FC = () => {
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

    const adjustFacebookWidth = () => {
      const fbPage = document.querySelector<HTMLElement>(".fb-page");
      if (fbPage) {
        const width = window.innerWidth < 756 ? "300" : "500";
        fbPage.setAttribute("data-width", width);
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      }
    };

    adjustFacebookWidth();

    return () => {
      window.removeEventListener("resize", adjustFacebookWidth);
    };
  }, []);

  return (
    <div className="container flex justify-center">
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/ISSAS.GULV"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/ISSAS.GULV"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/ISSAS.GULV">Issas Gulv</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPage;
