"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "cmdk";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import aboutIcon from "../public/static/icons/about.json";
import articlesIcon from "../public/static/icons/articles.json";
import copyLinkIcon from "../public/static/icons/copy-link.json";
import emailIcon from "../public/static/icons/email.json";
import homeIcon from "../public/static/icons/home.json";
import investingIcon from "../public/static/icons/investing.json";
import podcastsIcon from "../public/static/icons/podcasts.json";
import projectsIcon from "../public/static/icons/projects.json";
import reminderIcon from "../public/static/icons/reminder.json";
import sourceIcon from "../public/static/icons/source.json";
import talksIcon from "../public/static/icons/talks.json";
import usesIcon from "../public/static/icons/uses.json";
import { styled } from "../stitches.config";
import { Box } from "./Box";
import Toast from "./Toast";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CommandBarContext = createContext(null);

export function useCommandBar() {
  const context = useContext(CommandBarContext);
  if (!context) {
    throw new Error("useCommandBar must be used within CommandBar");
  }
  return context;
}

export default function CommandBar(props) {
  const copyLinkRef = useRef();
  const emailRef = useRef();
  const sourceRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const articlesRef = useRef();
  const projectsRef = useRef();
  const talksRef = useRef();
  const podcastsRef = useRef();
  const investingRef = useRef();
  const usesRef = useRef();
  const reminderRef = useRef();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const actions = useMemo(() => {
    const iconSize = { width: 24, height: 24 };

    return [
      {
        id: "copy",
        name: "Copy Link",
        shortcut: ["l"],
        keywords: "copy-link",
        section: "General",
        perform: () => {
          navigator.clipboard.writeText(window.location.href);
          setShowToast(true);
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={copyLinkRef}
            style={iconSize}
            animationData={copyLinkIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "email",
        name: "Send Email",
        shortcut: ["e"],
        keywords: "send-email",
        section: "General",
        perform: () => {
          router.push("/contact");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={emailRef}
            style={iconSize}
            animationData={emailIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "source",
        name: "View Source",
        shortcut: ["s"],
        keywords: "view-source",
        section: "General",
        perform: () => {
          window.open("https://github.com/zenorocha/zenorocha.com", "_blank");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={sourceRef}
            style={iconSize}
            animationData={sourceIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "home",
        name: "Home",
        shortcut: ["g", "h"],
        keywords: "go-home",
        section: "Go To",
        perform: () => {
          router.push("/");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={homeRef}
            style={iconSize}
            animationData={homeIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "about",
        name: "About",
        shortcut: ["g", "a"],
        keywords: "go-about",
        section: "Go To",
        perform: () => {
          router.push("/about");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={aboutRef}
            style={iconSize}
            animationData={aboutIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "articles",
        name: "Articles",
        shortcut: ["g", "b"],
        keywords: "go-articles",
        section: "Go To",
        perform: () => {
          router.push("/articles");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={articlesRef}
            style={iconSize}
            animationData={articlesIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "projects",
        name: "Projects",
        shortcut: ["g", "p"],
        keywords: "go-projects",
        section: "Go To",
        perform: () => {
          router.push("/projects");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={projectsRef}
            style={iconSize}
            animationData={projectsIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "talks",
        name: "Talks",
        shortcut: ["g", "t"],
        keywords: "go-talks",
        section: "Go To",
        perform: () => {
          router.push("/talks");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={talksRef}
            style={iconSize}
            animationData={talksIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "podcasts",
        name: "Podcasts",
        shortcut: ["g", "c"],
        keywords: "go-podcasts",
        section: "Go To",
        perform: () => {
          router.push("/podcasts");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={podcastsRef}
            style={iconSize}
            animationData={podcastsIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "investing",
        name: "Investing",
        shortcut: ["g", "i"],
        keywords: "go-investing",
        section: "Go To",
        perform: () => {
          router.push("/investing");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={investingRef}
            style={iconSize}
            animationData={investingIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "uses",
        name: "Uses",
        shortcut: ["g", "u"],
        keywords: "go-uses",
        section: "Go To",
        perform: () => {
          router.push("/uses");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={usesRef}
            style={iconSize}
            animationData={usesIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: "reminder",
        name: "Reminder",
        shortcut: ["g", "r"],
        keywords: "go-reminder",
        section: "Go To",
        perform: () => {
          router.push("/reminder");
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={reminderRef}
            style={iconSize}
            animationData={reminderIcon}
            loop={false}
            autoplay={false}
          />
        )
      }
    ];
  }, [router]);

  const contextValue = useMemo(
    () => ({
      toggle: () => setOpen((prev) => !prev),
      open: () => setOpen(true),
      close: () => setOpen(false)
    }),
    []
  );

  // Handle keyboard shortcut (Cmd/Ctrl+K)
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Group actions by section
  const groupedActions = useMemo(() => {
    const groups = {};
    actions.forEach((action) => {
      if (!groups[action.section]) {
        groups[action.section] = [];
      }
      groups[action.section].push(action);
    });
    return groups;
  }, [actions]);

  return (
    <CommandBarContext.Provider value={contextValue}>
      <StyledCommandDialog open={open} onOpenChange={setOpen}>
        <StyledCommandInput placeholder="Type a command or search…" />
        <StyledCommandList>
          <StyledCommandEmpty>No results found.</StyledCommandEmpty>
          {Object.entries(groupedActions).map(([section, sectionActions]) => (
            <StyledCommandGroup key={section} heading={section}>
              {sectionActions.map((action) => (
                <ActionCommandItem
                  key={action.id}
                  action={action}
                  value={`${action.name} ${action.keywords}`}
                  onSelect={() => action.perform()}
                />
              ))}
            </StyledCommandGroup>
          ))}
        </StyledCommandList>
      </StyledCommandDialog>

      {props.children}

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </CommandBarContext.Provider>
  );
}

function ActionCommandItem({ action, value, onSelect }) {
  const itemRef = useRef(null);

  const handleMouseEnter = () => {
    action.icon?.props?.lottieRef?.current?.play();
  };

  const handleMouseLeave = () => {
    // Only stop if not selected
    if (itemRef.current?.getAttribute("aria-selected") !== "true") {
      action.icon?.props?.lottieRef?.current?.stop();
    }
  };

  // Use MutationObserver or check on focus
  const handleFocus = () => {
    action.icon?.props?.lottieRef?.current?.play();
  };

  const handleBlur = () => {
    action.icon?.props?.lottieRef?.current?.stop();
  };

  return (
    <StyledCommandItem
      ref={itemRef}
      value={value}
      onSelect={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Action>
          {action.icon && action.icon}
          <ActionRow>
            <span>{action.name}</span>
          </ActionRow>
        </Action>
        {action.shortcut?.length ? (
          <Shortcut aria-hidden>
            {action.shortcut.map((shortcut) => (
              <Kbd key={shortcut}>{shortcut}</Kbd>
            ))}
          </Shortcut>
        ) : null}
      </Box>
    </StyledCommandItem>
  );
}

const Kbd = styled("kbd", {
  background: "rgba(255, 255, 255, .1)",
  color: "$secondary",
  padding: "4px 8px",
  textTransform: "uppercase"
});

const Shortcut = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px"
});

const Action = styled("div", {
  display: "flex",
  gap: "8px",
  alignItems: "center"
});

const ActionRow = styled("div", {
  display: "flex",
  flexDirection: "column"
});

// const StyledCommandDialog = styled(CommandDialog, {
//   '& [cmdk-root]': {
//     backgroundColor: '#1a1c1e',
//     maxWidth: '600px',
//     width: '100%',
//     color: '$primary',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
//       backgroundColor: '$command',
//       WebkitBackdropFilter: 'saturate(300%) blur(25px)',
//       backdropFilter: 'saturate(300%) blur(25px)',
//     },
//   },

const StyledCommandDialog = styled(CommandDialog, {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 16px 16px",
  background: "rgba(0, 0, 0, .8)",
  boxSizing: "border-box"
});

const StyledCommandInput = styled(CommandInput, {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  maxWidth: "600px",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  margin: 0,
  background: "$command",
  color: "$primary",
  backgroundColor: "#1a1c1e",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px"
});

const StyledCommandList = styled(CommandList, {
  backgroundColor: "#1a1c1e",
  maxHeight: "400px",
  width: "100%",
  maxWidth: "600px",
  overflow: "auto",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  /* Hide scrollbar for Chrome, Safari and Opera */
  "&::-webkit-scrollbar": {
    display: "none"
  },
  /* Hide scrollbar for IE, Edge and Firefox */
  "-ms-overflow-style": "none",
  "scrollbar-width": "none"
});

const StyledCommandEmpty = styled(CommandEmpty, {
  padding: "12px 16px",
  textAlign: "center",
  fontSize: "14px",
  color: "$secondary"
});

const StyledCommandGroup = styled(CommandGroup, {
  "& [cmdk-group-heading]": {
    padding: "8px 16px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    background: "$command",
    color: "$secondary"
  }
});

const StyledCommandItem = styled(CommandItem, {
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  cursor: "pointer",
  color: "$secondary",
  '&[aria-selected="true"]': {
    background: "rgba(255, 255, 255, 0.1)",
    color: "$primary"
  },
  "&:hover, &:focus": {
    background: "rgba(255, 255, 255, 0.1)"
  }
});
