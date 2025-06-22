import { Alert, Button, Card, Chip, createTheme } from '@mantine/core';

export const theme = createTheme({
  white: "#fff",
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "#fff",
        variant: "outline",
      },
      vars: (_theme, props) => {
        if (props.variant !== "subtle") {
          return {
            root: {
              '--button-padding-x': "10px",
              '--button-padding-y': "5px",
              '--button-bd': "0.5px solid #5A5A5A",
              "--button-bg": "#242424"
            }
          }
        }

        return {
          root: {
            '--button-padding-x': "10px",
            '--button-padding-y': "5px",
          }
        }
      }
    }),
    Alert: Alert.extend({
      defaultProps: {
        color: "lime",
        vars: () => {
          return {
            root: {
              "--alert-color": "#CCFF00",
              "--alert-bd": "0.5px solid rgb(220, 255, 127)",
              "--alert-bg": "rgba(204, 255, 0, 0.02)"
            }
          }
        }
      }
    }),
    Chip: Chip.extend({
      defaultProps: {
        vars: () => {
          return {
            root: {
              "--chip-bd": "0.5px solid #C8E972",
              "--chip-color": "#C8E972",
              "--chip-hover": "#CCFF001A",
              "--chip-bg": "#C8E972",
              "--chip-icon-size": "0",
              "--chip-spacing": "0",
              "--chip-padding": "12px"
            }
          }
        }
      }
    }),
    Card: Card.extend({
      defaultProps: {
        bg: "#222324",
        bd: "1px solid #525252"
      }
    })
  }
})
