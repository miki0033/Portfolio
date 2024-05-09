import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link, Tooltip } from "@nextui-org/react";

const Contact = () => {
  const myEmail = "michele.monteferrante@gmail.com";
  const myPhone = "+39 3200885296";

  function copyOnClick(event: MouseEvent) {
    let textToCopy = "";
    const targetid = event?.target?.id;
    if (targetid == "email") {
      textToCopy = myEmail;
    }
    if (targetid == "phone") {
      textToCopy = myPhone;
    }
    copyTextToClipboard(textToCopy);
    console.log("Testo copiato:", textToCopy);
  }
  function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div id="contact" className="contact bg-secondary-100 p-8 w-full">
      <div className="flex flex-row justify-evenly">
        <Tooltip showArrow={true} content="Copy to clipboard">
          <div id="email" className="flex flex-row m-1" onClick={copyOnClick}>
            <EnvelopeIcon className="w-6 h-6 mx-2 m-1" />
            {myEmail}
          </div>
        </Tooltip>

        <Tooltip showArrow={true} content="Copy to clipboard">
          <div id="phone" className="flex flex-row m-1" onClick={copyOnClick}>
            <PhoneIcon className="w-6 h-6 mx-2 m-1" />
            {myPhone}
          </div>
        </Tooltip>
        <Link
          isBlock
          isExternal
          showAnchorIcon
          href="https://www.linkedin.com/in/michele-monteferrante-98a255243/"
          color="foreground"
        >
          <div id="phone" className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-slate-900 m-1"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <p className="m-1">LinkedIn</p>
          </div>
        </Link>
        <Link
          isBlock
          showAnchorIcon
          isExternal
          href="https://github.com/miki0033/"
          color="foreground"
        >
          <div id="phone" className="flex flex-row">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-slate-900 m-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
            <p className="m-1"> GitHub</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
