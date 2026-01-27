/**
 * Command Registry - Defines all available terminal commands
 *
 * This file maps command names to their handlers, making it easy to
 * add new commands without modifying the main hook logic.
 */

import { SOCIAL_LINKS } from "./constants";
import {
  AboutTemplate,
  ContactTemplate,
  HelpListTemplate,
  ProjectDetailsTemplate,
  ProjectsTemplate,
  SkillsTemplate,
  SocialTemplate,
} from "./templates";
import { allProjectDetails } from "./templates/project-details";

// Type for a simple template command (e.g., "help" → shows help)
type TemplateCommand = {
  type: "template";
  template: () => HTMLDivElement;
};

// Type for a link command (e.g., "github" → opens URL)
type LinkCommand = {
  type: "link";
  url: string;
};

// Type for special commands handled differently
type SpecialCommand = {
  type: "special";
};

type CommandDefinition = TemplateCommand | LinkCommand | SpecialCommand;

/**
 * Registry of all available commands
 * - Add new commands here to extend the terminal
 */
export const COMMAND_REGISTRY: Record<string, CommandDefinition> = {
  // Template commands - show output in terminal
  help: { type: "template", template: HelpListTemplate },
  whoami: { type: "template", template: AboutTemplate },
  about: { type: "template", template: AboutTemplate },
  skills: { type: "template", template: SkillsTemplate },
  projects: { type: "template", template: ProjectsTemplate },
  social: { type: "template", template: SocialTemplate },
  socials: { type: "template", template: SocialTemplate },
  contact: { type: "template", template: ContactTemplate },

  // Link commands - open URLs
  github: { type: "link", url: SOCIAL_LINKS.github },
  linkedin: { type: "link", url: SOCIAL_LINKS.linkedin },
  facebook: { type: "link", url: SOCIAL_LINKS.facebook },

  // Special commands - handled separately
  clear: { type: "special" },
};

/**
 * Checks if a command is a project detail command (e.g., "pr 1" or "project 2")
 */
export function parseProjectCommand(
  input: string,
): { isValid: true; projectId: number } | { isValid: false } {
  const parts = input.toLowerCase().trim().split(" ");

  if ((parts[0] === "pr" || parts[0] === "project") && parts.length === 2) {
    const projectNum = Number(parts[1]);
    if (projectNum > 0 && projectNum <= allProjectDetails.length) {
      return { isValid: true, projectId: projectNum };
    }
  }

  return { isValid: false };
}

/**
 * Gets the project details template for a given project ID
 */
export function getProjectTemplate(projectId: number) {
  return () => ProjectDetailsTemplate(projectId);
}
