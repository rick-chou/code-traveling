import Mock from 'mockjs'

Mock.mock('/api/list', {
  'list|4': [
    {
      'id|+1': 1,
      img: '@image',
      name: '@name',
      color: '@color',
      title: '@title',
    },
  ],
})
