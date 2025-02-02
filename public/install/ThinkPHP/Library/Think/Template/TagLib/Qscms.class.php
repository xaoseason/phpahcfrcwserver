<?php
/**
 * qscms标签库驱动
 */
namespace Think\Template\Taglib;
use Think\Template\TagLib;
class Qscms extends TagLib{
    // 标签定义
    protected $tags   =  array(
        //加载资源
        'load' => array('attr'=>'type,href', 'close'=>0),
    );
    public function __call($method, $args) {
        $tag = substr($method, 1);
        if (!isset($this->tags[$tag])) return false;
        $_tag = $args[0];
        $_tag['cache'] = isset($_tag['cache']) ? intval($_tag['cache']) : 0;
        $_tag['列表名'] = isset($_tag['列表名']) ? trim($_tag['列表名']) : 'list';
        $_tag['type'] = isset($_tag['type']) ? trim($_tag['type']) : 'run';
        if (!$_tag['type']) return false;
        $parse_str  = '<?php ';
        if ($_tag['cache']) {
            //标签名-属性-属性值 组合标识
            ksort($_tag);
            $tag_id = md5($tag . '&' . implode('&', array_keys($_tag)) . '&' . implode('&', array_values($_tag)));
            //缓存代码开始
            $parse_str .= '$' . $_tag['列表名'] . ' = S(\'' . $tag_id . '\');';
            $parse_str .=  'if (false === $' . $_tag['列表名'] . ') { ';
        }
        $action = $_tag['type'];
        $class = '$tag_' . $tag . '_class';
        $parse_str .= $class . ' = new \\Common\\qscmstag\\' . $tag . 'Tag('.self::arr_to_html($_tag).');';
        $parse_str .= '$' . $_tag['列表名'] . ' = ' . $class . '->' . $action . '();';
        if($method != '_load'){
            $parse_str .= '$frontend = new \\Common\\Controller\\FrontendController;';
            $parse_str .= '$page_seo = $frontend->_config_seo('.self::config_seo().',$'.$_tag['列表名'].');';
        }
        if ($_tag['cache']) {
            //缓存代码结束
            $parse_str .= 'S(\'' . $tag_id . '\', $' . $_tag['列表名'] . ', ' . $_tag['cache'] . ');';
            $parse_str .= ' }';
        }
        $parse_str .= '?>';
        $parse_str .= $args[1];
        return $parse_str;
    }
    private static function config_seo() {
        $page_seo = D('Page')->get_page();
        $page = $page_seo[strtolower(MODULE_NAME).'_'.strtolower(CONTROLLER_NAME).'_'.strtolower(ACTION_NAME)];
        return 'array("pname"=>"'.$page['pname'].'","title"=>"'.$page['title'].'","keywords"=>"'.$page['keywords'].'","description"=>"'.$page['description'].'","header_title"=>"'.$page['header_title'].'")';
    }
    /**
     * 转换数据为HTML代码
     * @param array $data
     */
    private static function arr_to_html($data) {
        if (is_array($data)) {
            $str = 'array(';
                foreach ($data as $key=>$val) {
                    if (is_array($val)) {
                        $str .= "'$key'=>".self::arr_to_html($val).",";
                    } else {
                        if (strpos($val, '$')===0) {
                            $str .= "'$key'=>_I($val),";
                        } else {
                            $str .= "'$key'=>'".addslashes_deep($val)."',";
                        }
                    }
                }
                return $str.')';
            }
            return false;
        }
    }
