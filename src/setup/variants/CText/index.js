const defaultTextColor = 'text-black'

const variants = {
  default: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-normal',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-base',
    },
  },

  text: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-normal',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-base',
      lineHeight: 'leading-relaxed',
    },
  },

  'body-1': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: '',
      fontSize: 'text-base',
      lineHeight: 'leading-relaxed',
    },
  },

  'body-1-left': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: '!text-left',
      fontSize: 'text-base',
      lineHeight: 'leading-relaxed',
    },
  },

  'body-2': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: '',
      fontSize: 'text-sm',
      lineHeight: 'leading-relaxed',
    },
  },

  title: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-bold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-2xl',
    },
  },

  'title-uppercase': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-bold',
      fontStyle: 'normal',
      textTransform: 'uppercase',
      fontSize: 'text-2xl',
    },
  },

  'title-secondary': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-xl',
    },
  },

  'title-3': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-bold',
      fontStyle: 'uppercase',
      textTransform: 'none',
      fontSize: 'text-3xl',
    },
  },

  subtitle: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-medium',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-lg',
    },
  },

  caption: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-normal',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-xs',
    },
  },

  'caption-error': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-normal',
      fontStyle: 'italic',
      textTransform: 'none',
      fontSize: 'text-xs',
    },
  },

  label: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-medium',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-sm',
    },
  },

  'label-muted': {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-medium',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-sm',
    },
  },

  btn: {
    el: {
      color: defaultTextColor,
      fontWeight: 'font-bold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-base',
      hoverColor: 'hover:underline', // Thêm hover color
      textDecoration: '', // Thêm underline cho button
      cursor: 'cursor-pointer',
    },
  },

  error: {
    el: {
      color: 'text-red-600',
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-base',
    },
  },

  success: {
    el: {
      color: 'text-green-600',
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-base',
    },
  },

  warning: {
    el: {
      color: 'text-yellow-600',
      fontWeight: 'font-semibold',
      fontStyle: 'normal',
      textTransform: 'none',
      fontSize: 'text-md',
    },
  },

  muted: {
    el: {
      color: 'text-gray-400',
      fontWeight: 'font-normal',
      fontStyle: 'italic',
      textTransform: 'none',
      fontSize: 'text-base',
    },
  },
}

export default variants
