import styled, { css } from 'styled-components';

export const ViewerWrapper = styled.div(() => css`
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative; /* Establishes the main positioning context */

  /* Isolate the viewer from the host app's box-sizing model */
  .rpv-core__viewer, .rpv-core__page-layer, .rpv-core__text-layer {
    box-sizing: content-box !important;
  }

  /* --- Toolbar Styles --- */
  .rpv-core__toolbar {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    padding: 4px 8px; /* Reduced vertical padding */
    height: 40px; /* Explicit height for consistency */
    box-sizing: border-box;
  }

  .rpv-core__toolbar-left,
  .rpv-core__toolbar-middle,
  .rpv-core__toolbar-right {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 8px; /* Space between items in each section */
  }

  .rpv-core__toolbar-middle {
    flex-grow: 1;
    justify-content: center;
  }

  .rpv-core__button {
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rpv-core__button:hover {
    background-color: #e0e0e0;
  }

  .rpv-core__current-page-input {
    padding: 0 8px;
    font-size: 14px;
  }

  .rpv-core__search-input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
    height: 28px;
    box-sizing: border-box;
  }

  /* Make the text layer a correctly sized overlay */
  .rpv-core__text-layer {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    transform-origin: 0 0 !important;
    color: transparent !important; /* Hide text to prevent ghosting */
  }

  /* Reset the individual text spans to protect them from inherited styles */
  .rpv-core__text-layer-text {
    position: absolute !important;
    white-space: pre !important;
    line-height: 1 !important;
    transform-origin: 0 0 !important;
    /* Hint for the browser to prioritize rendering precision */
    text-rendering: geometricPrecision !important;
  }
`);

export default ViewerWrapper;