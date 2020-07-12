import * as React from "react";

function SvgCart(props) {
  return (
    <svg viewBox="0 0 511.999 511.999" width="1em" height="1em" {...props}>
      <path fill={props.color} d="M143.022 347.67h293.979a15.17 15.17 0 0014.538-10.839l59.829-200.888a15.171 15.171 0 00-14.537-19.498H110.789l-20.412-68.54a15.169 15.169 0 00-14.538-10.838h-60.67C6.792 37.066 0 43.857 0 52.235c0 8.377 6.792 15.169 15.169 15.169H64.53l20.315 68.211c.062.225.127.448.199.668l53.966 181.202c-30.804 2.072-55.237 27.778-55.237 59.098 0 32.67 26.579 59.249 59.248 59.249h15.059c6.581 22.563 27.437 39.102 52.097 39.102 24.659 0 45.516-16.538 52.097-39.102h80.482c6.581 22.563 27.437 39.102 52.097 39.102 24.659 0 45.516-16.538 52.097-39.102h19.543c8.377 0 15.169-6.792 15.169-15.169s-6.792-15.169-15.169-15.169H446.95c-6.581-22.564-27.437-39.102-52.097-39.102s-45.517 16.538-52.097 39.102h-80.482c-6.581-22.564-27.437-39.102-52.097-39.102s-45.517 16.538-52.097 39.102h-15.059c-15.942 0-28.911-12.97-28.911-28.912 0-15.942 12.97-28.912 28.912-28.912zm222.524-200.889h110.941l-20.88 70.107h-90.061v-70.107zm-.001 100.445h81.026l-20.879 70.107h-60.147v-70.107zM253.304 146.781h81.905v70.107h-81.905v-70.107zm-.001 100.445h81.905v70.107h-81.905v-70.107zm-30.335 70.107h-52.349l-20.879-70.107h73.228v70.107zM119.826 146.781h103.141v70.107h-82.262l-20.879-70.107zm275.028 249.948c13.197 0 23.933 10.736 23.933 23.933s-10.736 23.933-23.933 23.933-23.933-10.736-23.933-23.933 10.736-23.933 23.933-23.933zm-184.676 0c13.197 0 23.933 10.736 23.933 23.933s-10.736 23.933-23.933 23.933-23.933-10.736-23.933-23.933 10.736-23.933 23.933-23.933z" />
    </svg>
  );
}

export default SvgCart;