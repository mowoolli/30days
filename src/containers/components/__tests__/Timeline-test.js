import React from "react"
import { shallow, mount } from "enzyme"

import Timeline from "../Timeline"

describe("Timeline", () => {
  let wrapper;

  it("wraps content in a div with .notificationsFrame class", () => {
    wrapper = shallow(<Timeline />)
    expect(wrapper.find(".notificationsFrame").length).toEqual(1)
  })

  it("has a title of Timeline", () => {
    wrapper = mount(<Timeline />)
    expect(wrapper.find(".title").text()).toBe("Timeline")
  })
})