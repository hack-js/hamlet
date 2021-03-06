/**
 * Date : 2012.11.30
 * Desc : 서버 상태를 표현할 모델 클래스
 */
Ext.define('HAMLET.model.ServerStatus', {
	extend: 'Ext.data.Model',	// extend
    fields: [
		'hamlet_status',
		'target_status',
		'target_name',
		"target_url",
		"target_latency",
		"target_memory",
		"monitor_cycle",
		"server_id",
		"created_date",
		"status",
		"image",
		{name:'latency'  , type : 'int'},
		"vm_use_rate",
		"vm_total_mem",
		"vm_free_mem",
		"os_total_mem",
		"os_free_mem",
		"disk_total_space",
		"disk_free_space",
		"average_vm_use_rate",
		"success_rate",
		"fail_count",
		"average_latency",
		"group_date"
    ]
});
