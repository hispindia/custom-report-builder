# Instructions for Use

This is a flexible tool for creating data tables using DHIS analytics. The data contents of the table can be chosen on a row-and-column basis and a cell-by-cell basis. Cells can also contain statically defined text. Using the content layout defined in a template, a report can be generated by querying the data from analytics and using organisation unit and/or period parameters as filters. Data in the generated table can be highlighted different colors according to its value.

## Saved Tables

A list of created tables is shown on this page.

Create a new table by clicking **+ Create New** button and entering a name for the table in the following dialog.

Edit an existing table by clicking on the name of the table in the list.

Open a menu of options for a table by clicking on the **three vertical dots** to the right of the name of the table. Options include **Generate a report** from the template, **Edit** the template, or **Delete** the table.

## Editing a table template

Here you can define the layout and contents of the table.

### General Options

Change the name of the table by clicking on the pencil icon to the right of the table name.

Generate a report from the template by clicking the **Generate** button. This will take you to the report page, where you can choose the appropriate parameters to populate the table with data from analytics.

Choose highlighting for the table by switching the switch and opening the highlighting editor dialog by pressing the **Configure** button. This will highlight data in the table with different colors depending on the values of the data. Edit the value thresholds in the editor dialog.

### Choosing Table Contents

Add rows or columns using the buttons to the top left of the table and entering a name in the following dialog. The name can be changed later using the row or column options.

-   By default, the new cells added will be **Data** cells but can be changed later (to **Text** or **Empty** cells).
-   New cells will receive any dimensions set on the rows or columns they are added to, and those dimensions can be changed later.

Choose dimensions for a row or column (i.e. a data item, organisation unit(s), or period(s)) by opening the row or column options menu by clicking the **three vertical dots** icon next to the row or column name, selecting **Add dimensions to Row/Colum**, then selecting the dimension you wish to add. A dialog will open to select the desired dimension.

-   Once the dimension is selected, it will be visible under the row or column name, and can be changed or removed by clicking on it.
-   All three dimensions can be defined on a row or column.
-   Each cell in the row or column can still choose dimensions for that cell that are different from its parent row or column. Values chosen for individual cells take precedence over the row or column values.
-   New cells added to the row or column will use the dimensions defined on the existing row or column, but as above, those dimensions can be changed later.

Choose individual cell contents by using the selectors inside each cell. Cells can have one of three content types.

-   **Data** cells receive a value queried from analytics.
    -   A data item can be selected using the selector dialog, and organisation unit(s) and period(s) can be selected as filters for the data in the cell.
    -   Organisation unit and period filters can also be chosen on a table-wide basis using the report parameters during report generation. Leave the organisation unit and/or period dimensions as undefined in the template to take advantage of the table-wide values.
-   **Text** cells can have statically defined text. Click on the text to edit it.
-   **Empty** cells will have no value.

## Generating a table from a template

This is where a table is populated with data according to a template.

Upon generation, you can choose table-wide parameters that will act as filters for all the cells in the table. For example, a user may choose to generate a report for a specific organisation unit or for a specific time period.

### Choosing report parameters

Upon entering the **Generate** page, a dialog will open to choose table-wide organisation unit or period values.

-   The organisation unit or period values chosen here will apply to all the cells which do not have that value specified in the template.
-   If all the cells have an organisation unit specified in the template, the organisation unit selector will not show in this dialog. The same applies to periods.
-   Data for the table can be queried without organisation units specified, but one or more periods **must** be specified.

Once the table has loaded, new data can be loaded with different parameters by clicking on the **Choose Parameters** button.

### Other tools

Once the table has loaded, you can see the definition for any data cell by mousing over the cell. A tooltip will show the data item, organisation unit, and period used to query data for that cell.

The generated report can be printed using the **Print** button.

Clicking on **Edit Template** will take you back to the template editing page.
