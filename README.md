# star-ratio
Stats that matter.
Handy tool to compare open source projects:

[![thumbnail](http://starratio.js.org/thumbnail.png)](http://starratio.js.org)

## Testimonials
> ["Very interesting and clever tool to compare JavaScript frameworks"](https://twitter.com/shanselman/status/775956034229678080) - Scott Hanselman

## This client is build with:
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-vis](https://github.com/uber/react-vis)
- [reactable](https://github.com/glittershark/reactable)
- [React Intl](https://github.com/yahoo/react-intl)
- [moment](https://github.com/moment/moment)
- Github [octicons](https://octicons.github.com/) and colors
- [css-loaders](https://github.com/lukehaas/css-loaders)



## How to add link to the comparison list?
To add the link with comparisons to the list just add a new yaml file into `comparisons` folder:

### JavaScript
[Create yaml file](https://github.com/stats-show/stats.show/new/master/packages/js/comparisons) with following format:  
```
title: <Title for the link>
repos:
  - github: <github user / github repository> 
    npm: <npm package name> (optional, needed only if package name different that repository name)
```

### .NET
[Create yaml file](https://github.com/stats-show/stats.show/new/master/packages/net/comparisons) with following format:  
```
title: <Title for the link>
repos:
  - github: <github user / github repository> 
    nuget: <nuget package name> (optional, needed only if package name different that repository name)
```


## (Javascript only) How to add the project to the chart?
To add the project to chart just add it into [`data.json`](https://github.com/stats-show/stats.show/blob/master/packages/js/public/data.json) file.

### `data.json` records format:
`{"type":"frontend_framework","user":"angular","repo":"angular.js","package":"angular"},`

- `type` - (optional) category of the project
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
