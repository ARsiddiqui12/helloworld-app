export default {
  items: [
     {
      title: true,
      name: 'Profile',
      wrapper: {            // optional wrapper object
        element: 'span',      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
      {
      name: 'Edit Profile',
      url: '/theme/colors',
      icon: 'fa fa-user'
    },{
      name: 'Attendance',
      url: '/theme/colors',
      icon: 'fa fa-check-square-o'
    },{
      name: 'Salary',
      url: '/theme/colors',
      icon: 'fa fa-credit-card'
    },{
      name: 'Task / Assignment',
      url: '/theme/colors',
      icon: 'fa fa-tasks',
        badge: {
        variant: 'info',
        text: '0'
      }
    },{
      name: 'Complains',
      url: '/theme/colors',
      icon: 'fa fa-list-alt',
      badge: {
        variant: 'info',
        text: '0'
      }
    },
    {
      divider: true
    },
    {
      divider: true,
      class: 'm-2'
    }
  ]
};
