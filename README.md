# star-ratio
Stats that matter.
Handy tool to compare javascript open source projects.

## This client is build with:
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-vis](https://github.com/uber/react-vis)
- [React Intl](https://github.com/yahoo/react-intl)
- [moment](https://github.com/moment/moment)
- [octicons](https://octicons.github.com/) and colors

## How to add the project to chart?
To add the project to chart just add it into [`data.json`](https://github.com/StarRatio/star-ratio/blob/master/docs/data.json) file.

### `data.json` records format:
`{"type":"frontend_framework","user":"angular","repo":"angular.js","package":"angular"},`

- `type` - (optional) Type(category) of the project
  Next types can be used:
    - `backend_framework`
    - `bundler`
    - `styles`
    - `language`
    - `testing_framework`
    - `data_visualization`
- `user` - Github user/organization name
- `repo` - Github repository name
- `package` - (optional) npm package name (skiped if same as Github repository name)