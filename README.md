# Spincrement

A jQuery plugin for incrementing up to a certain number, for effect.

See it in action [here](https://rawgit.com/johnjcamilleri/jquery-spincrement/master/demo.html).

## Usage

```
$('#selector').spincrement(options)
```

## Options

### HTML Attributes

Some things can be set at HTML attributes.
These take precedence over the JavaScript options.

| Attribute | Description            |
|:----------|:-----------------------|
| data-from | Start from this number |
| data-to   | Count to this number   |
| data-dp   | Decimal places         |

### JavaScript options

| Name              | Default             | Description                                                             |
|:------------------|:--------------------|:------------------------------------------------------------------------|
| from              | 0                   | Start from this number                                                  |
| to                | null                | Count to this number. When null, use contents of element.               |
| decimalPlaces     | null                | How many decimal places. When null, determine from contents of element. |
| decimalPoint      | '.'                 |                                                                         |
| thousandSeparator | ','                 |                                                                         |
| duration          | 1000                | Total length of animation (ms)                                          |
| leeway            | 50                  | Amount to which duration may randomly vary (percent)                    |
| easing            | 'spincrementEasing' | Function ...                                                            |
| fade              | true                | Use fade effect                                                         |
| complete          | null                | Callback function called when animation is done                         |
