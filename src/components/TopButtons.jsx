import ImportBtn from './controlButtons/ImportBtn';
import ExportBtn from './controlButtons/ExportBtn'
import SaveLocalBtn from './controlButtons/SaveToLocalStorageBtn';
import LoadLocalBtn from './controlButtons/LoadFromLocalStorageBtn';

const TopButtons = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LockUp Password Manager</span>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <ExportBtn />
            </li>
            <li>
              <SaveLocalBtn />
            </li>
            <li>
              <ImportBtn />
            </li>
            <li>
              <LoadLocalBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopButtons
