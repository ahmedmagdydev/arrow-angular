/* =================== correspondences module ================ */
export const correspondencesStatusLookup: any[] = [
  {title: 'new', coresspondences: [], percent: 0},
  {title: 'done', coresspondences: [], percent: 0},
  {title: 'assigned', coresspondences: [], percent: 0},
  {title: 'waiting', coresspondences: [], percent: 0},
  {title: 'delayed', coresspondences: [], percent: 0}
];
export const correspondencesPortalStatusLookup: any[] = [
    {title: 'new', coresspondences: [], percent: 0},
    {title: 'done', coresspondences: [], percent: 0},
    {title: 'assigned', coresspondences: [], percent: 0},
    {title: 'waiting', coresspondences: [], percent: 0},
    {title: 'delayed', coresspondences: [], percent: 0},
    {title: 'deleted', coresspondences: [], percent: 0},
    {title: 'recall', coresspondences: [], percent: 0},
    {title: 'global', coresspondences: [], percent: 0},
    {title: 'notifications', coresspondences: [], percent: 0},
    {title: 'personalFolders', coresspondences: [], percent: 0},
];
export const correspondencesTableInfoLookup: any = {
  columns: [
    {title: 'priority', name: 'priority'}, {title: 'subject', name: 'title'}, {title: 'sender', name: 'sender'},
    {title: 'createdDate', name: 'createdDate', isDate: true}, {title: 'number', name: 'number'},
    {title: 'relatedActions', name: 'relatedActions'},
    {title: 'template.name', name: 'template', innerName: 'name'},
    {title: 'actionList', name: 'actionList'},
  ],
  detailsColumns: [
    {title: 'priority', name: 'priority'}, {title: 'title', name: 'title'}, {title: 'sender', name: 'sender'},
    {title: 'number', name: 'number'},
    {title: 'relatedActions', name: 'relatedActions'}, {title: 'template.name', name: 'template', innerName: 'name'},
    {title: 'to', name: 'to'}, {title: 'cc', name: 'cc'},
    {title: 'createdDate', name: 'createdDate', isDate: true}, {title: 'keywords', name: 'keyords'},
    {title: 'shortDesc', name: 'shortDesc'},
    {title: 'redirectInst', name: 'redirectInst'}, {title: 'redirectComment', name: 'redirectComment'},
  ],
  data: []
};
export const newCorrespondenceActionsLookup: any[] = [
  {action: 'send'},
  {action: 'save'},
  {action: 'save-close'},
  {action: 'archive'},
  {action: 'temp-archive'},
  {action: 'archive-send'},
  {action: 'show-archived-versions'},
  {action: 'print'},
  {action: 'show-history'},
  {action: 'export'},
  {action: 'add-task'},
  {action: 'scan'},
  {action: 'attachments'},
  {action: 'related-correspondence'},
  {action: 'links'},
];
export const newCorrespondenceTabs: any [] = [
    {title: 'mainInfo', active: true},
    {title: 'attachments', active: false},
    {title: 'tasks', active: false},
    {title: 'correspondence.related', active: false},
    {title: 'history', active: false},
    {title: 'redirect', active: false},
    {title: 'prepareLetter', active: false},
    {title: 'form-sample', active: false},
];
export interface fileObject {
  name?: string, size?: number , lastModifiedDate?: string, type?: string, owner?: string,
  versions?: File[]
};








/* =================== search module ================ */
export const queryTableInfoLookup: any = {
  columns: [
    {title: 'queryName', name: 'queryName'},
    {title: 'owner', name: 'owner'},
    {title: 'run', name: 'run', tooltip: ''},
    {title: 'actionList', name: 'actionList'}
  ],
  data: [],
  filters: [
      {title: 'all', value: 0, colorClass: 'primary-bg'},
      {title: 'correspondences', value: 0, colorClass: 'third-bg'},
      {title: 'tasks', value: 0, colorClass: 'secondary-bg'},
  ],
    actions: [
        {icon: 'assets/images/trash.png', title: 'trash', name: 'trash'},
        {icon: 'assets/images/forward.png', title: 'accessRights', name: 'accessRights'},
    ]
};

/* =================== Access Rights Module ================ */
export const accessTableInfoLookup: any = {
  columns: [
    {title: 'queryName', name: 'queryName'},
    {title: 'queryType', name: 'queryType'},
    {title: 'accessright', name: 'accessright'},
    {title: 'actionList', name: 'actionList'}
  ],
  data: [],

    actions: [
        {icon: 'assets/images/trash.png', title: 'trash', name: 'trash'}
        ]
};
