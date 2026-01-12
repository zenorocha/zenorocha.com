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
import { AnimatedIcon } from './AnimatedIcon';
import { Box } from './Box';
import Toast from './Toast';

const CommandBarContext = createContext(null);

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

  const shortcutCombos = {
    copy: ['l'],
    email: ['e'],
    source: ['s'],
    home: ['g', 'h'],
    about: ['g', 'a'],
    articles: ['g', 'b'],
    projects: ['g', 'p'],
    talks: ['g', 't'],
    podcasts: ['g', 'c'],
    investing: ['g', 'i'],
    uses: ['g', 'u'],
    reminder: ['g', 'r']
  };

  const actionsBySection = {
    General: [
      {
        id: 'copy',
        name: 'Copy Link',
        shortcut: shortcutCombos.copy,
        keywords: 'copy-link',
        section: 'General',
        iconData: copyLinkIcon,
        perform: () => {
          navigator.clipboard.writeText(window.location.href);
          setShowToast(true);
          setOpen(false);
        },
        iconId: 'copy'
      },
      {
        id: 'email',
        name: 'Send Email',
        shortcut: shortcutCombos.email,
        keywords: 'send-email',
        section: 'General',
        iconData: emailIcon,
        perform: () => {
          router.push('/contact');
          setOpen(false);
        },
        iconId: 'email'
      },
      {
        id: 'source',
        name: 'View Source',
        shortcut: shortcutCombos.source,
        keywords: 'view-source',
        section: 'General',
        iconData: sourceIcon,
        perform: () => {
          window.open('https://github.com/zenorocha/zenorocha.com', '_blank');
          setOpen(false);
        },
        iconId: 'source'
      }
    ],
    'Go To': [
      {
        id: 'home',
        name: 'Home',
        shortcut: shortcutCombos.home,
        keywords: 'go-home',
        section: 'Go To',
        iconData: homeIcon,
        perform: () => {
          router.push('/');
          setOpen(false);
        },
        iconId: 'home'
      },
      {
        id: 'about',
        name: 'About',
        shortcut: shortcutCombos.about,
        keywords: 'go-about',
        section: 'Go To',
        iconData: aboutIcon,
        perform: () => {
          router.push('/about');
          setOpen(false);
        },
        iconId: 'about'
      },
      {
        id: 'articles',
        name: 'Articles',
        shortcut: shortcutCombos.articles,
        keywords: 'go-articles',
        section: 'Go To',
        iconData: articlesIcon,
        perform: () => {
          router.push('/articles');
          setOpen(false);
        },
        iconId: 'articles'
      },
      {
        id: 'projects',
        name: 'Projects',
        shortcut: shortcutCombos.projects,
        keywords: 'go-projects',
        section: 'Go To',
        iconData: projectsIcon,
        perform: () => {
          router.push('/projects');
          setOpen(false);
        },
        iconId: 'projects'
      },
      {
        id: 'talks',
        name: 'Talks',
        shortcut: shortcutCombos.talks,
        keywords: 'go-talks',
        section: 'Go To',
        iconData: talksIcon,
        perform: () => {
          router.push('/talks');
          setOpen(false);
        },
        iconId: 'talks'
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        shortcut: shortcutCombos.podcasts,
        keywords: 'go-podcasts',
        section: 'Go To',
        iconData: podcastsIcon,
        perform: () => {
          router.push('/podcasts');
          setOpen(false);
        },
        iconId: 'podcasts'
      },
      {
        id: 'investing',
        name: 'Investing',
        shortcut: shortcutCombos.investing,
        keywords: 'go-investing',
        section: 'Go To',
        iconData: investingIcon,
        perform: () => {
          router.push('/investing');
          setOpen(false);
        },
        iconId: 'investing'
      },
      {
        id: 'uses',
        name: 'Uses',
        shortcut: shortcutCombos.uses,
        keywords: 'go-uses',
        section: 'Go To',
        iconData: usesIcon,
        perform: () => {
          router.push('/uses');
          setOpen(false);
        },
        iconId: 'uses'
      },
      {
        id: 'reminder',
        name: 'Reminder',
        shortcut: shortcutCombos.reminder,
        keywords: 'go-reminder',
        section: 'Go To',
        iconData: reminderIcon,
        perform: () => {
          router.push('/reminder');
          setOpen(false);
        },
        iconId: 'reminder'
      }
    ]
  };

  const actionsList = Object.values(actionsBySection).flat();

  const actionsById = actionsList.reduce((map, action) => {
    map[action.id] = action;
    return map;
  }, {});

  useHotkeys('mod+k', (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  });

  useHotkeys('escape', () => setOpen(false), { enabled: open });

  useHotkeys(shortcutCombos.copy, () => actionsById.copy.perform());
  useHotkeys(shortcutCombos.email, () => actionsById.email.perform());
  useHotkeys(shortcutCombos.source, () => actionsById.source.perform());
  useHotkeys(shortcutCombos.home, () => actionsById.home.perform());
  useHotkeys(shortcutCombos.about, () => actionsById.about.perform());
  useHotkeys(shortcutCombos.articles, () => actionsById.articles.perform());
  useHotkeys(shortcutCombos.projects, () => actionsById.projects.perform());
  useHotkeys(shortcutCombos.talks, () => actionsById.talks.perform());
  useHotkeys(shortcutCombos.podcasts, () => actionsById.podcasts.perform());
  useHotkeys(shortcutCombos.investing, () => actionsById.investing.perform());
  useHotkeys(shortcutCombos.uses, () => actionsById.uses.perform());
  useHotkeys(shortcutCombos.reminder, () => actionsById.reminder.perform());

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
                {Object.entries(actionsBySection).map(
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
  const iconData = action.iconData;

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
          <AnimatedIcon lottieRef={iconRef} animationData={iconData} />
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
