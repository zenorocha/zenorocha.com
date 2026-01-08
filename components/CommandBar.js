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
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

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

const iconMap = {
  copy: copyLinkIcon,
  email: emailIcon,
  source: sourceIcon,
  home: homeIcon,
  about: aboutIcon,
  articles: articlesIcon,
  projects: projectsIcon,
  talks: talksIcon,
  podcasts: podcastsIcon,
  investing: investingIcon,
  uses: usesIcon,
  reminder: reminderIcon
};

const CommandBarContext = createContext(null);

const hasInputValue = () => {
  return !!document.querySelector('[cmdk-input]')?.value;
};

function useSequenceShortcuts(actions, enabled) {
  const sequenceRef = useRef([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!enabled || actions.length === 0) {
      sequenceRef.current = [];
      clearTimeout(timeoutRef.current);
      return;
    }

    const clearSequence = () => {
      sequenceRef.current = [];
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    const handleKeyDown = (e) => {
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.shiftKey ||
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key) ||
        hasInputValue()
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      const newSequence = [...sequenceRef.current, key];

      const matchingAction = actions.find(
        (action) =>
          action.shortcut?.length === newSequence.length &&
          action.shortcut.every((s, i) => s === newSequence[i])
      );

      if (matchingAction) {
        e.preventDefault();
        clearSequence();
        matchingAction.perform();
        return;
      }

      sequenceRef.current = newSequence;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(clearSequence, 1000);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearSequence();
    };
  }, [enabled, actions]);
}

export function useCommandBar() {
  const context = useContext(CommandBarContext);
  if (!context) {
    throw new Error('useCommandBar must be used within CommandBar');
  }
  return context;
}

export default function CommandBar(props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const iconRefsMap = useRef(new Map());

  const createAction = (id, name, shortcut, keywords, section, perform) => ({
    id,
    name,
    shortcut,
    keywords,
    section,
    perform,
    iconId: id
  });

  const actions = [
    createAction('copy', 'Copy Link', ['l'], 'copy-link', 'General', () => {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setOpen(false);
    }),
    createAction('email', 'Send Email', ['e'], 'send-email', 'General', () => {
      router.push('/contact');
      setOpen(false);
    }),
    createAction(
      'source',
      'View Source',
      ['s'],
      'view-source',
      'General',
      () => {
        window.open('https://github.com/zenorocha/zenorocha.com', '_blank');
        setOpen(false);
      }
    ),
    createAction('home', 'Home', ['g', 'h'], 'go-home', 'Go To', () => {
      router.push('/');
      setOpen(false);
    }),
    createAction('about', 'About', ['g', 'a'], 'go-about', 'Go To', () => {
      router.push('/about');
      setOpen(false);
    }),
    createAction(
      'articles',
      'Articles',
      ['g', 'b'],
      'go-articles',
      'Go To',
      () => {
        router.push('/articles');
        setOpen(false);
      }
    ),
    createAction(
      'projects',
      'Projects',
      ['g', 'p'],
      'go-projects',
      'Go To',
      () => {
        router.push('/projects');
        setOpen(false);
      }
    ),
    createAction('talks', 'Talks', ['g', 't'], 'go-talks', 'Go To', () => {
      router.push('/talks');
      setOpen(false);
    }),
    createAction(
      'podcasts',
      'Podcasts',
      ['g', 'c'],
      'go-podcasts',
      'Go To',
      () => {
        router.push('/podcasts');
        setOpen(false);
      }
    ),
    createAction(
      'investing',
      'Investing',
      ['g', 'i'],
      'go-investing',
      'Go To',
      () => {
        router.push('/investing');
        setOpen(false);
      }
    ),
    createAction('uses', 'Uses', ['g', 'u'], 'go-uses', 'Go To', () => {
      router.push('/uses');
      setOpen(false);
    }),
    createAction(
      'reminder',
      'Reminder',
      ['g', 'r'],
      'go-reminder',
      'Go To',
      () => {
        router.push('/reminder');
        setOpen(false);
      }
    )
  ];

  const groupedActions = actions.reduce((groups, action) => {
    if (!groups[action.section]) {
      groups[action.section] = [];
    }
    groups[action.section].push(action);
    return groups;
  }, {});

  useHotkeys('mod+k', (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  });

  useHotkeys('escape', () => setOpen(false), { enabled: open });

  const copyAction = actions.find((a) => a.id === 'copy');
  const emailAction = actions.find((a) => a.id === 'email');
  const sourceAction = actions.find((a) => a.id === 'source');

  const handleSingleKey = (action) => (e) => {
    if (open && !hasInputValue() && action) {
      e.preventDefault();
      action.perform();
    }
  };

  useHotkeys('l', handleSingleKey(copyAction), { enabled: open });
  useHotkeys('e', handleSingleKey(emailAction), { enabled: open });
  useHotkeys('s', handleSingleKey(sourceAction), { enabled: open });

  const sequenceActions = actions.filter((a) => a.shortcut.length > 1);
  useSequenceShortcuts(sequenceActions, open);

  return (
    <CommandBarContext.Provider
      value={{
        toggle: () => setOpen((prev) => !prev),
        open: () => setOpen(true),
        close: () => setOpen(false)
      }}
    >
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlay-show data-[state=closed]:animate-overlay-hide fixed inset-0 bg-[rgba(0,0,0,0.8)]" />
          <Dialog.Content className="data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide fixed top-1/2 left-1/2 w-full max-w-150 -translate-x-1/2 -translate-y-1/2 px-4 outline-none select-none">
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
                          iconId={action.iconId}
                          iconRefsMap={iconRefsMap}
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

function ActionCommandItem({ action, iconId, iconRefsMap, value, onSelect }) {
  const itemRef = useRef(null);

  if (!iconRefsMap.current.has(iconId)) {
    iconRefsMap.current.set(iconId, { current: null });
  }
  const iconRef = iconRefsMap.current.get(iconId);
  const iconData = iconMap[iconId];

  const playIcon = () => iconRef?.current?.play();
  const stopIcon = () => {
    if (itemRef.current?.getAttribute('aria-selected') !== 'true') {
      iconRef?.current?.stop();
    }
  };

  useEffect(() => {
    const element = itemRef.current;
    if (!element) {
      return;
    }

    const handleSelectionChange = () => {
      if (element.getAttribute('aria-selected') === 'true') {
        iconRef?.current?.play();
      } else {
        iconRef?.current?.stop();
      }
    };

    const observer = new MutationObserver(handleSelectionChange);

    observer.observe(element, {
      attributes: true,
      attributeFilter: ['aria-selected']
    });

    handleSelectionChange();

    return () => observer.disconnect();
  }, [iconRef]);

  return (
    <CommandItem
      ref={itemRef}
      value={value}
      onSelect={onSelect}
      onMouseEnter={playIcon}
      onMouseLeave={stopIcon}
      onFocus={playIcon}
      onBlur={stopIcon}
      className="text-secondary data-[selected=true]:text-primary m-0 flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.1)] data-[selected=true]:bg-[rgba(255,255,255,0.1)]"
    >
      <Box className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Lottie
            lottieRef={iconRef}
            className="h-6 w-6"
            animationData={iconData}
            loop={false}
            autoplay={false}
          />
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
