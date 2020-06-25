import React from "react"
const timezones = ["PST8PDT", "MST", "MST7MDT", "CST6CDT", "EST", "EST5EDT", "Etc/UTC"]

export class TimeForm extends React.Component {
  constructor(props) {
    super(props)

    this._changeTimeZone = this._changeTimezone.bind(this)
    this._handleFormSubmit = this._handleFormSubmit.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._changeAreaLocation = this._changeAreaLocation.bind(this)

    const { tz, areaLocation } = this.props;
    this.state = { tz, areaLocation }
  }

  _handleChange(evt) {
    typeof this.props.onFormChange === "function" && this.props.onFormChange(this.state);
  }

  _changeTimezone(evt) {
    const tz = evt.target.value;
    this.setState({ tz }, this._handleChange);
  }

  _changeAreaLocation(evt) {
    const areaLocation = encodeURIComponent(evt.target.value).replace(/%20/g, '+');
    this.setState({ areaLocation }, this._handleChange);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    typeof this.props.onFormSubmit === "function" && this.props.onFormSubmit(this.state);
  }

  render() {
    const { tz } = this.state;

    return (<form onSubmit={this._handleFormSubmit}>
      <select onChange={this._changeTimeZone}
        defaultValue={tz}>{timezones.map(t => { return (<option key={t} value={t}>{t}</option>) })}</select>
      <input type="text" placeholder="A chronic string message"
        onChange={this._changeAreaLocation} />
      <input type="submit" value="Update request" />
    </form>)
  }
}

export default TimeForm