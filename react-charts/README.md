# Build Charts in React #

## 1. Overview ##

    *) A Line Chart is a type of chart that displays information as a series of data points called markers connected by line segments. It's used to show trends over a specific time period, making it ideal for displaying time series data.

    *) An Area Chart is similar to a line chart, but the area between the line and the X-asis is filled with color. It shows the magnitude of values over time.

    *) A Stacked Area Chart is an extension of the basic area chart, where multiple data series are stacked on top of each other. This allows you to compare not only the individual data trends but also the cumulative value of all data series.

    *) A Bar Chart displays categorical data using rectangular bars. Each bar represents a category, and its height is proportional to the value of that category.

    *) A Pie Chart s a circular statistical graphic that is divided into slices to illustrate numerical proportions. Each slice represents a category of data and its size is proportional to the percentage of that category in the whole.

    *) A heatmap is a data visualization that uses color gradients to represent the intensity of values across different locations, making patterns and trends easy to spot

## 2. Line Chart - Use Case ##

    - Business: Tracking sales, profit or revenue over time.
    - Website Analytics: Monitoring website traffic page views, or user engagement over a specific period.
    - Finance: Displaying stock prices or financial metrics like revenue growth.
    - Health: Tracking the number of daily steps or weight loss over a period.

## 3. Area and Stacked Area Charts - Use Case ##

    - Cumulative Metrics: Tracking total sales, revenue, or profit over time.
    - Website Traffic: Monitoring the number of visitors, page views, or session duration over time.
    - Stock Prices: Visualizing the value of an asset over time, with the shaded area showing overall growth.
    - Weather Data: Plotting temperature or rainfall over time.

## 4. Bar Chart - Use Case ##

    - Sales Data: Comparing product sales across different months or regions.
    - Population Data: Displaying the population of various cities regions, or countries.
    - Survey Results: Visualizing how many respondents selected each option in a survey.
    - Budget Allocation: Illustrating the distribution of a budget across different departments or expenses.

## 5. Pie Chart - Use Case ##

    - Market Share Distribution: Showing the percentage of market share held by different companies or products.
    - Budget Allocation: Illustrating how a budget is divided among various expenses.
    - Survey Results: Presenting the percentage of responses in different categories.
    - Sales Data: Visualizing the distribution of sales across different products or regions.

## 6. Heatmap - Use Case ##

    - how to use Heatmap
    ```js
    npm install leaflet
    npm install leaflet.heat
    npm install react-leaflet
    - Data Structure for Heatmap
    const heatmapData = [
        [latitude1, longitude1, intensity1],
        [latitude2, longitude2, intensity2],
        [latitude3, longitude3, intensity3],
    ];
    ```js
