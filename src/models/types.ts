/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActiveTab {
  Home = '/',
  Projects = '/projects',
  Experience = '/experience',
  Contact = '/contact'
}

export interface ProjectMetric {
  label: string;
  value: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SystemStatus {
  status: string;
  online: boolean;
  version: string;
  activeProjects: number;
}
