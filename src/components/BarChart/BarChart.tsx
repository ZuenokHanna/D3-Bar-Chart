import * as d3 from 'd3'
import React, { useRef, useEffect } from 'react'

// @ts-ignore
const BarChart = ({ data }) => {
  const ref = useRef(null)

  useEffect(() => {
    draw()
  }, [data])

  const draw = () => {
    const totalHeight = 550
    const totalWidth = 925
    const margin = { top: 20, right: 30, bottom: 40, left: 60 }
    const width = totalWidth - margin.left - margin.right
    const height = totalHeight - margin.top - margin.bottom

    const minDate = new Date(data[0][0])
    const maxDate = new Date(data[data.length - 1][0])

    const barWidth = width / data.length

    const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, width])

    const yScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([0, d3.max(data, (d) => d[1])])
      .range([height, 0])

    // Define x and y axes
    const xAxis = d3
      .axisBottom(xScale)
      // @ts-ignore
      .tickFormat(d3.timeFormat('%B %Y'))
      .ticks(2)

    const yAxis = d3
      .axisLeft(yScale)
      .ticks(4)
      .tickFormat((d: any) => `$${d.toFixed(0)}`)

    const display = d3
      .select('.display')
      .attr('width', totalWidth)
      .attr('height', totalHeight)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const addTooltip = () => {
      const tooltip = d3.select('#graph').append('g').attr('id', 'tooltip').style('display', 'none')

      const text = tooltip.append('text')
      text.append('tspan').attr('id', 'tooltip-head')

      return tooltip
    }

    const tooltip = addTooltip()

    // Adds horizontal grid
    display
      .selectAll('.horizontalGrid')
      .data(yScale.ticks(3))
      .enter()
      .append('line')
      .attr('class', 'horizontalGrid')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => {
        return yScale(d)
      })
      .attr('y2', (d) => {
        return yScale(d)
      })

    // Adds bar chart
    const bar = display.selectAll('g').data(data).enter().append('g')

    bar
      .append('rect')
      .data(data)
      .style('fill', '#f7be0f')
      .classed('bar', true)
      .attr('width', barWidth)
      .attr('height', (d: any) => height - yScale(d[1]))
      .attr('x', (d: any, i) => barWidth * i)
      .attr('y', (d: any, i) => yScale(d[1]))
      .attr('stroke', '#fff')

    const line = d3
      .line()
      .x((d: any, i) => barWidth * i + 0.5 * barWidth)
      .y((d: any, i) => yScale(d[2]))

    // Adds line graph
    display
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#b270d2')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 3)
      .attr('d', line)

    // Add the line circles

    display
      .selectAll('circles')
      .data(data)
      .enter()
      .append('circle')
      .attr('fill', '#8922b9')
      .attr('stroke', 'none')
      .attr('cx', (d: any, i) => barWidth * i + 0.5 * barWidth)
      .attr('cy', (d: any, i) => yScale(d[2]))
      .attr('r', 4)
      .on('mouseover', (d: any, i: any) => {
        tooltip.style('display', null)
        d3.select(d.target).style('stroke', 'none').attr('r', 4)
      })
      .on('mouseout', (d: any, i: any) => {
        tooltip.style('display', 'none')
        d3.select(d.target).style('stroke', 'none').attr('r', 4)
      })
      .on('mousemove', (d: any, i: any) => {
        const left = d.clientX - 230 + 'px'
        const top = yScale(i[2]) - 50 + 'px'
        let options = { weekday: 'short' }
        // @ts-ignore
        const day = new Intl.DateTimeFormat('en-US', options).format(new Date(i[0]))
        const dataHeader = `${day}-${new Date(i[0]).toLocaleDateString('en-US', {
          dateStyle: 'long',
        })}`
        d3.select('#tooltip-head').text(dataHeader)
        tooltip.style('top', top).style('left', left)
        d3.select(d.target).style('stroke', '#d589f9').style('stroke-width', 4).attr('r', 8)
      })

    display
      .append('g')
      .attr('id', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

    display.append('g').attr('id', 'y-axis').call(yAxis)
  }

  return (
    <div id="graph">
      <svg ref={ref} className={'display'} />
    </div>
  )
}

export default BarChart
