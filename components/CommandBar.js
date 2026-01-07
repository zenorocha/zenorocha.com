'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from 'cmdk';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import aboutIcon from '../public/static/icons/about.json';
import articlesIcon from '../public/static/icons/articles.json';
import copyLinkIcon from '../public/static/icons/copy-link.json';
import emailIcon from '../public/static/icons/email.json';
import homeIcon from '../public/static/icons/home.json';
import investingIcon from '../public/static/icons/investing.json';
import podcastsIcon from '../public/static/icons/podcasts.json';
import projectsIcon from '../public/static/icons/projects.json';
import reminderIcon from '../public/static/icons/reminder.json';
import sourceIcon from '../public/static/icons/source.json';
import talksIcon from '../public/static/icons/talks.json';
import usesIcon from '../public/static/icons/uses.json';
import { Box } from './Box';
import Toast from './Toast';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const CommandBarContext = createContext(null);

export function useCommandBar() {
  const context = useContext(CommandBarContext);
  if (!context) {
    throw new Error('useCommandBar must be used within CommandBar');
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
    return [
      {
        id: 'copy',
        name: 'Copy Link',
        shortcut: ['l'],
        keywords: 'copy-link',
        section: 'General',
        perform: () => {
          navigator.clipboard.writeText(window.location.href);
          setShowToast(true);
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={copyLinkRef}
            className="h-6 w-6"
            animationData={copyLinkIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'email',
        name: 'Send Email',
        shortcut: ['e'],
        keywords: 'send-email',
        section: 'General',
        perform: () => {
          router.push('/contact');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={emailRef}
            className="h-6 w-6"
            animationData={emailIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'source',
        name: 'View Source',
        shortcut: ['s'],
        keywords: 'view-source',
        section: 'General',
        perform: () => {
          window.open('https://github.com/zenorocha/zenorocha.com', '_blank');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={sourceRef}
            className="h-6 w-6"
            animationData={sourceIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'home',
        name: 'Home',
        shortcut: ['g', 'h'],
        keywords: 'go-home',
        section: 'Go To',
        perform: () => {
          router.push('/');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={homeRef}
            className="h-6 w-6"
            animationData={homeIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'about',
        name: 'About',
        shortcut: ['g', 'a'],
        keywords: 'go-about',
        section: 'Go To',
        perform: () => {
          router.push('/about');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={aboutRef}
            className="h-6 w-6"
            animationData={aboutIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'articles',
        name: 'Articles',
        shortcut: ['g', 'b'],
        keywords: 'go-articles',
        section: 'Go To',
        perform: () => {
          router.push('/articles');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={articlesRef}
            className="h-6 w-6"
            animationData={articlesIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'projects',
        name: 'Projects',
        shortcut: ['g', 'p'],
        keywords: 'go-projects',
        section: 'Go To',
        perform: () => {
          router.push('/projects');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={projectsRef}
            className="h-6 w-6"
            animationData={projectsIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'talks',
        name: 'Talks',
        shortcut: ['g', 't'],
        keywords: 'go-talks',
        section: 'Go To',
        perform: () => {
          router.push('/talks');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={talksRef}
            className="h-6 w-6"
            animationData={talksIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        shortcut: ['g', 'c'],
        keywords: 'go-podcasts',
        section: 'Go To',
        perform: () => {
          router.push('/podcasts');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={podcastsRef}
            className="h-6 w-6"
            animationData={podcastsIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'investing',
        name: 'Investing',
        shortcut: ['g', 'i'],
        keywords: 'go-investing',
        section: 'Go To',
        perform: () => {
          router.push('/investing');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={investingRef}
            className="h-6 w-6"
            animationData={investingIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'uses',
        name: 'Uses',
        shortcut: ['g', 'u'],
        keywords: 'go-uses',
        section: 'Go To',
        perform: () => {
          router.push('/uses');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={usesRef}
            className="h-6 w-6"
            animationData={usesIcon}
            loop={false}
            autoplay={false}
          />
        )
      },
      {
        id: 'reminder',
        name: 'Reminder',
        shortcut: ['g', 'r'],
        keywords: 'go-reminder',
        section: 'Go To',
        perform: () => {
          router.push('/reminder');
          setOpen(false);
        },
        icon: (
          <Lottie
            lottieRef={reminderRef}
            className="h-6 w-6"
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
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
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
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 bg-[rgba(0,0,0,0.8)] duration-200" />
          <Dialog.Content
            className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%] fixed top-1/2 left-1/2 w-full max-w-150 -translate-x-1/2 -translate-y-1/2 px-4 duration-200 outline-none select-none"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <VisuallyHidden.Root>
              <Dialog.Title>Command Menu</Dialog.Title>
            </VisuallyHidden.Root>
            <Command className="bg-command w-full rounded-[.5rem] shadow-lg backdrop-blur-[1.5625rem] backdrop-saturate-300">
              <CommandInput
                placeholder="Type a command or search…"
                className="text-primary m-0 w-full rounded-t-lg border-0 bg-transparent px-4 py-3 text-base outline-none"
              />
              <CommandList className="max-h-100 w-full overflow-auto rounded-b-lg bg-transparent [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <CommandEmpty className="text-secondary px-4 py-3 text-center text-sm">
                  No results found.
                </CommandEmpty>
                {Object.entries(groupedActions).map(
                  ([section, sectionActions]) => (
                    <CommandGroup
                      key={section}
                      heading={section}
                      className="**:[[cmdk-group-heading]]:text-secondary **:[[cmdk-group-heading]]:bg-transparent **:[[cmdk-group-heading]]:px-4 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-[0.625rem] **:[[cmdk-group-heading]]:tracking-[0.0625rem] **:[[cmdk-group-heading]]:uppercase"
                    >
                      {sectionActions.map((action) => (
                        <ActionCommandItem
                          key={action.id}
                          action={action}
                          value={`${action.name} ${action.keywords}`}
                          onSelect={() => action.perform()}
                        />
                      ))}
                    </CommandGroup>
                  )
                )}
              </CommandList>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
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
    if (itemRef.current?.getAttribute('aria-selected') !== 'true') {
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
    <CommandItem
      ref={itemRef}
      value={value}
      onSelect={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="text-secondary data-[aria-selected=true]:text-primary m-0 flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.1)] data-[aria-selected=true]:bg-[rgba(255,255,255,0.1)]"
    >
      <Box className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <span>{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="grid grid-flow-col gap-1" aria-hidden>
            {action.shortcut.map((shortcut) => (
              <kbd
                key={shortcut}
                className="text-secondary bg-[rgba(255,255,255,0.1)] px-2 py-1 uppercase"
              >
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </Box>
    </CommandItem>
  );
}
