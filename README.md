# Directory_Searcher
A dynamic angular directive that uses chosen and will automatically create and fill angular-chosen dropdowns based upon a search object

<ul>Dependencies:
  <li>
    twitter bootstrap 3.3.2 or greater
  </li>
  <li>
    angular 1.3.15 or greater
  </li>
  <li>
    chosen 1.1.0  or greater
  </li>
  <li>
    angular-chosen
  </li>
</ul>
  
<h3>Installation</h3>
<ol>
  <li>
    Install bootstrap, angular, angular-chosen, chosen by following their idividual insatllation instructions.
  </li>
  <li>
    Add a script tag to your html page referencing the Directory_Searcher js file.</br>
    ex:&ensp; &lt;script src="path_to_Directory_Searcher.js"&gt;&lt;/script&gt;
  </li>
  <li>
    In your angular module add Directory_Searcher to your dependencies</br>
    ex:&ensp; var app= angular.module('app',['dynamicSearch']);
  </li>
  <li>
    In your angular controller create an object to filter your search by</br>
  </li>
  <li>
    In your angular controller create an array of objects</br>
  </li>
  <li>
    Add the tag to your html page.</br>
    ex:&ensp; &lt;searcher-directive search-object="object_to_filter_by" search-lists="array_of_objects"&gt;&lt;/searcher-directive&gt;
  </li>
  <li>
    Add filter to your ng-repeat of the item that you are filtering by.</br>
    ex:&ensp; &lt;div ng-repeat="item in list | filter:object_to_filter_by"&gt;&lt;/div&gt;
  </li>
</ol>
</hr>
<h3>Attributes</h3>
<ul>
  <li>
    search-object:
    <ul>
      <li>Reqired: Yes</li>
      <li>Description: This is an object that will have all the properties that you want to filter the objects in the list by.</li>
    </ul>
  </li>
  <li>
    search-lists:
    <ul>
      <li>Reqired: Yes</li>
      <li>Description: This is the list of objects that will be filtered. This populates the dropdown selections.</li>
    </ul>
  </li>
  <li>
    display-object:
    <ul>
      <li>Reqired: No</li>
      <li>Description: This is an object with the same properties of the search-object. 
          If this is present the values of the properties that match the search-object properties will be displayed. 
          If this is not present the properties of the search-object will be displayed.
      </li>
    </ul>
  </li>
  <li>
    ng-style:
    <ul>
      <li>Reqired: No</li>
      <li>Description: This allows you to style the dropdown elements. Follow angular.js ng-style model.
      </li>
    </ul>
  </li>
  <li>
    vertical:
    <ul>
      <li>Reqired: No</li>
      <li>Description: This is a falsey attribute. Set to true or false. 
          If true element will be displayed in a vertical fashion.
          If false or not there element will be displayed in a horizontal fashion using bootstrap's class col-sm-3.
      </li>
    </ul>
  </li>
</ul>
