/*
 * Copyright (C) 2015 Sean T. McBeth <sean@seanmcbeth.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// cut, copy, and paste commands are events that the browser manages,
// so we don't have to include handlers for them here.
define(function (require) {
  "use strict";
  var OperatingSystem = require("../OperatingSystem");
  OperatingSystem.Windows = new OperatingSystem(
      "Windows", "CTRL", "CTRL", "CTRL_y",
      "", "HOME", "END",
      "CTRL", "HOME", "END");
  return OperatingSystem;
});
